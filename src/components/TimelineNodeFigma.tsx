import type { CSSProperties } from 'react'
import { rem750 as r } from '../lib/rem750'

/** Figma 导出：时间轴节点（多层圆） */
export default function TimelineNodeFigma() {
  const abs: CSSProperties = { position: 'absolute', borderRadius: 9999 }
  return (
    <div aria-hidden style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          ...abs,
          width: r(27.18),
          height: r(27.18),
          left: r(3.88),
          top: r(3.88),
          background: '#FF923E',
        }}
      />
      <div
        style={{
          ...abs,
          width: r(34.95),
          height: r(34.95),
          left: 0,
          top: 0,
          background: '#FFC599',
        }}
      />
      <div
        style={{
          ...abs,
          width: r(27.18),
          height: r(27.18),
          left: r(3.88),
          top: r(3.88),
          background: '#FFA967',
        }}
      />
      <div
        style={{
          ...abs,
          width: r(19.41),
          height: r(19.41),
          left: r(7.77),
          top: r(7.77),
          background: '#F96D01',
        }}
      />
    </div>
  )
}
