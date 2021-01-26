import React from 'react';
import { List, TextareaItem, Button, WhiteSpace, NoticeBar } from 'antd-mobile';
import s from './Example.module.less';


export default function Example() {
    return (
        <>
        <NoticeBar className={s.notice} marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                申请被驳回: 原因填写的身份信息与银行卡身份证号不匹配，请修改后再申请！
        </NoticeBar>
        <WhiteSpace />
        <div className={s.root}>
            <List
                renderHeader={() => (
                    <>
                        <h3>超管身份</h3>
                        <div>商户入驻流程为</div>
                    </>
                )}
            >
                <TextareaItem
                    className={s.require}
                    title="超管姓名"
                    placeholder="请输入"
                    data-seed="logId"
                    autoHeight
                />
                <TextareaItem
                    title="超管资料类型"
                    readOnly
                    value="身份证"
                    data-seed="logId"
                    autoHeight
                />
                <TextareaItem
                    className={s.require}
                    title="证件号码"
                    placeholder="请填写超级管理员的证件号码"
                    data-seed="logId"
                    autoHeight
                />
                <TextareaItem
                    className={s.require}
                    title="手机号码"
                    prefix="+86"
                    placeholder="用于接收微信支付的重要管理信息及日常操作验证码"
                    data-seed="logId"
                    autoHeight
                />
                <TextareaItem
                    className={s.require}
                    title="邮箱"
                    prefix="+86"
                    placeholder="用于接收微信支付的重要管理信息及日常操作验证码"
                    data-seed="logId"
                    autoHeight
                />
            </List>
        </div>
        <WhiteSpace /><WhiteSpace /><WhiteSpace />
        <Button className={s.button} type="primary">提交微信审核</Button>
        </>
    );
}
