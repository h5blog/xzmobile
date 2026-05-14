import qrCode from '../images/qr-code.png'
import gongan from '../images/gongan.png'
import { rem750 as r } from '../lib/rem750'

function MobileFooter() {
  return (
    <footer
      className="w-full"
      style={{
        paddingTop: `${r(32)}`,
        paddingBottom: `${r(40)}`,
        backgroundColor: '#252525',
        color: '#e8e8e8',
      }}
    >
      <div style={{
        paddingLeft: `${r(60)}`,
        paddingRight: `${r(60)}`,
      }}>
      <h2 className="m-0 font-medium" style={{ fontSize: r(24), lineHeight: 1.6, color: '#f96d01' }}>
        公司地址
      </h2>
      <div
        className="w-full min-w-0"
        style={{ marginTop: r(6), maxWidth: r(570), height: r(1), backgroundColor: '#595959' }}
      />
      <p
        className="m-0"
        style={{
          fontSize: r(24),
          lineHeight: 1.9,
          fontWeight: 500,
        }}
      >
        北京市海淀区海淀大悦信息科技园D2号楼4楼C-403室
      </p>

      <h2
        className="m-0 font-medium"
        style={{ marginTop: r(22), fontSize: r(24), lineHeight: 1.6, color: '#f96d01' }}
      >
        联系方式
      </h2>
      <div
        className="w-full min-w-0"
        style={{ marginTop: r(6), maxWidth: r(250), height: r(1), backgroundColor: '#595959' }}
      />
      <p className="m-0" style={{ fontSize: r(24), lineHeight: 1.7, fontWeight: 500 }}>
        xzsd@xinzhu-ai.com.cn
      </p>
      <div
        className="overflow-hidden"
        style={{
          width: r(256),
          maxWidth: '100%',
          height: r(256),
          marginTop: r(14),
        }}
      >
        <img src={qrCode} alt="公众号" className="h-full w-full object-contain" />
      </div>

      <h2
        className="m-0 font-medium"
        style={{ marginTop: r(60), fontSize: r(24), lineHeight: 1.6, color: '#f96d01' }}
      >
        关注我们
      </h2>
      <div
        className="w-full"
        style={{
          marginTop: r(6),
        }}
      >
        <div className="w-full min-w-0" style={{ maxWidth: r(340), height: r(1), backgroundColor: '#595959' }} />
        <p className="m-0" style={{ marginTop: r(12), fontSize: r(24), lineHeight: 1.6, fontWeight: 500 }}>
          扫描二维码关注新烛时代公众号
        </p>
      </div>
      </div>
      <div
        className="w-full"
        style={{
          marginTop: r(22),
        }}
      >
        <div className="w-full" style={{ height: r(1), backgroundColor: '#595959' }} />
        <p
          className="m-0 text-center"
          style={{ marginTop: r(10), color: '#9c9c9c', fontSize: r(24), lineHeight: 1.6, fontWeight: 500 }}
        >
          ©2025 北京新烛时代科技有限公司 版权所有
        </p>
        <p
          className="m-0 text-center"
          style={{ marginTop: r(2), color: '#9c9c9c', fontSize: r(24), lineHeight: 1.6, fontWeight: 500 }}
        >
          <a className="underline" href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            京ICP备2025157244号-1
          </a>
        </p>
        <p
          className="m-0 text-center"
          style={{ marginTop: r(2), color: '#9c9c9c', fontSize: r(24), lineHeight: 1.6, fontWeight: 500 }}
        >
          <a
            className="inline-flex items-center justify-center underline"
            style={{ gap: r(6) }}
            href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802048377"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gongan}
              alt=""
              className="shrink-0 object-contain"
              style={{ width: r(26), height: r(26) }}
              width={26}
              height={26}
              draggable={false}
            />
            京公网安备11010802048377号
          </a>
          </p>
      </div>
    </footer>
  )
}

export default MobileFooter
