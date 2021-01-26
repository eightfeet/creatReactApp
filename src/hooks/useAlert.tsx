import { CloseOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd-mobile';
import { useCallback } from 'react';
import IconClose from '~/compents/IconClose';
const alert = Modal.alert;

interface showAlertProps {
    title?: React.ReactNode,
    msg: React.ReactNode,
    closeable?: boolean,
    buttonText?: string,
    callback?: () => Promise<any> | void
}

export default () => {
    let modal: any;
    const closeAlert = useCallback(() => {
        if (modal) modal.close();
    }, [modal]);

    const showAlert = useCallback(({ title, msg, closeable=true, buttonText='我知道了', callback} : showAlertProps) => {
        const onClose = () => Promise.resolve().then(() => {
            if (callback instanceof Function) {
                return callback()
            }
        }).then(closeAlert).catch(closeAlert);

        modal = alert(
            title ? (
                <>
                    <div className="alert-title">{title}</div>
                    {closeable ? <IconClose className="alert-close" onClick={closeAlert} /> : null}
                </>
            ) : (
                closeable ? <IconClose className="alert-close" onClick={closeAlert} /> : null
            ),
            <div className="modal-content">
                <div className="modal-content-main">
                    {msg}
                </div>
                <Button className="mainbutton" type="primary" onClick={onClose}>{buttonText}</Button>
            </div>,
            []
        );
        return modal;
    }, []);

    return showAlert;
};
