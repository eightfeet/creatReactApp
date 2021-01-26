import { ExclamationCircleFilled } from '@ant-design/icons'
import { Button, InputItem, List, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'
import s from './Applied.module.less';

interface Props {
}

const Applied:React.FC<Props> = () => {
    return (
        <WingBlank>
            <div className={s.info}>
                <ExclamationCircleFilled className={s.tag} />
                <h3 className={s.title}>未提交</h3>
                <p>你的入驻申请单已创建，请尽快完成资料填写</p>
            </div>
            <List>
                <InputItem editable={false} value={"13564535566665"}>
                    <b>申请单编号</b>
                </InputItem>
            </List>
            <br/><br/>
            <Button style={{width: '70%'}} className="mainbutton" type="primary" onClick={() => {}} >继续</Button>
        </WingBlank>
    )
}

export default Applied
