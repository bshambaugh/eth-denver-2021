import type { CeramicApi } from '@ceramicnetwork/common'
import { IDX } from '@ceramicstudio/idx'

declare global {
  interface Window {
    idx?: IDX
  }
}

const aliases = {
  basicTranscript: 'kjzl6cwe1jw148hqh6f8t72a43xs1d3u54hk4xhpnp4co1g5hhxkhmi4i91c2ea'
}

export function createIDX(ceramic: CeramicApi): IDX {
  const idx = new IDX({ ceramic, aliases })
  window.idx = idx
  return idx
}
