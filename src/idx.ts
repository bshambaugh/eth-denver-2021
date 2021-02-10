import type { CeramicApi } from '@ceramicnetwork/common'
import { IDX } from '@ceramicstudio/idx'

declare global {
  interface Window {
    idx?: IDX
  }
}

const aliases = {
  basicTranscript: 'kjzl6cwe1jw14awezcmrejwbmpycpj8hy2ganffkevjb68bk8z93ccwqaratxra'
}

export function createIDX(ceramic: CeramicApi): IDX {
  const idx = new IDX({ ceramic, aliases })
  window.idx = idx
  return idx
}
