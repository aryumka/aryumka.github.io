// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkCjkFriendly from 'remark-cjk-friendly';
import { toString } from 'mdast-util-to-string';
import getReadingTime from 'reading-time';

// Stashes a "N min read" string into frontmatter via remarkPluginFrontmatter,
// reusing the same `reading-time` package the old Gatsby site used.
function remarkReadingTime() {
  return (tree, { data }) => {
    const text = toString(tree);
    const stats = getReadingTime(text);
    data.astro.frontmatter.minutesRead = Math.max(1, Math.round(stats.minutes));
  };
}

// A restrained, mostly-monochrome code theme matching the site's design tokens
// (warm off-black background, warm off-white foreground, a single muted gold
// accent for strings/constants, weight instead of hue for keywords).
const codeTheme = {
  name: 'aryumka-mono',
  type: 'dark',
  colors: {
    'editor.background': '#18170F',
    'editor.foreground': '#E7E3D6'
  },
  tokenColors: [
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#837E6D', fontStyle: 'italic' }
    },
    {
      scope: ['string', 'string.quoted', 'constant.other.symbol'],
      settings: { foreground: '#C9B98A' }
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character.escape'],
      settings: { foreground: '#C9B98A' }
    },
    {
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'storage',
        'storage.type',
        'storage.modifier'
      ],
      settings: { foreground: '#E7E3D6', fontStyle: 'bold' }
    },
    {
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: '#E7E3D6', fontStyle: 'bold' }
    },
    {
      scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class'],
      settings: { foreground: '#E7E3D6' }
    },
    {
      scope: ['variable', 'variable.parameter', 'variable.other'],
      settings: { foreground: '#E7E3D6' }
    },
    {
      scope: ['punctuation', 'meta.brace'],
      settings: { foreground: '#A8A395' }
    }
  ]
};

// https://astro.build/config
export default defineConfig({
  site: 'https://aryumka.me',
  integrations: [mdx(), sitemap()],
  markdown: {
    // remark-cjk-friendly relaxes CommonMark's emphasis flanking rules so
    // `**...(괄호)**한글` style bold — punctuation adjacent to CJK text —
    // parses correctly instead of rendering literal asterisks.
    remarkPlugins: [remarkCjkFriendly, remarkGfm, remarkReadingTime],
    shikiConfig: {
      theme: codeTheme,
      wrap: true
    }
  }
});
