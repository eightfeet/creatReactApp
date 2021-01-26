import { WingBlank, WhiteSpace, Steps, Button } from 'antd-mobile';
import classNames from 'classnames';
import React from 'react';
import InforList from '~/compents/InforList';
import useAlert from '~/hooks/useAlert';
import s from './UploadInfor.module.less';


const Step = Steps.Step;

function UploadInfor() {
    const showAlert = useAlert();

    return (
        <WingBlank className={s.wrap}>
            <WhiteSpace />
            <WhiteSpace />
            <Steps current={0} direction="horizontal" size="small">
                <Step title="提交申请" size="small" />
                <Step title="微信审核">2</Step>
                <Step title="账户验证">3</Step>
                <Step title="超管签约">4</Step>
            </Steps>
            <WhiteSpace />
            <InforList />
            <div className={s.fixbottom}>
                <Button
                    className={classNames(
                        s.button,
                        'whitebutton',
                        'mainbutton'
                    )}
                    type="primary"
                >
                    保存草稿
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    onClick={() =>
                        showAlert({
                            title: '对不起',
                            msg: (
                                <div>
                                    <h2>'222'</h2>
                                    <h2>'222'</h2>
                                    <h2>'222'</h2>
                                </div>
                            ),
                            closeable: false,
                            buttonText: '知道了',
                            callback: () => {
                                throw new Error('ccccc')
                            },
                        })
                    }
                    className={classNames(s.button, 'mainbutton')}
                    type="primary"
                >
                    提交微信审核
                </Button>
            </div>
        </WingBlank>
    );
}

export default UploadInfor;
