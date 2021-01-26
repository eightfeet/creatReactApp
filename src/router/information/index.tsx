import { Button } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import s from './style.module.less';

const ta = require('./ta.png').default;
const tb = require('./tb.png').default;
const tc = require('./tc.png').default;
const td = require('./td.png').default;
const a = require('./a.png').default;
const b = require('./b.png').default;
const c = require('./c.png').default;
const d = require('./d.png').default;

function Information() {
    const history = useHistory();
    return (
        <div className={s.wrap}>
            <div className={s.content}>
                <h1 className={s.title}>准备材料</h1>
                <h2 className={s.subtitle}>申请前请提前准备以下材料</h2>
                <div className={s.line} />
                <div className={s.t}>
                    <img src={ta} />
                </div>
                <p>需年检章齐全，到期时间必须大于申请之时3个月</p>
                <div className={s.a}>
                    <img src={a} />
                </div>
                <div className={s.t}>
                    <img src={tb} />
                </div>
                <p>仅企业需要提供，若为三证合一商户，可直接上传营业执照</p>
                <div className={s.b}>
                    <img src={b} />
                </div>
                <div className={s.t}>
                    <img src={tc} />
                </div>
                <p>到期时间必须大于申请之时3个月</p>
                <div className={s.c}>
                    <img src={c} />
                </div>
                <div className={s.t}>
                    <img src={td} />
                </div>
                <p>
                    个体工商户需提供法人账户或对公账户，企业类型商户需提供对公账户
                </p>
                <div className={s.d}>
                    <img src={d} />
                </div>
                <p>
                    特殊类目需提供相应的资质文件，例如餐饮类需提供《餐饮服务许可证》或实体店铺的三张照片。
                </p>
                <Button style={{width: '70%'}} className="mainbutton" type="primary" onClick={() => history.push('/upload')} >已准备好，立即申请</Button>
                <br />
            </div>
        </div>
    );
}

export default Information;
