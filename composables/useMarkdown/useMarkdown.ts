import { marked } from 'marked'

export function useMarkdown() {
  const render = (markdown: string) => {
    marked.parse(markdown)
  }

  return { render }
}
