import { FC, ReactNode, useRef } from "react";
import styles from '../styles/common.module.scss';

interface FileUploadProops {
    setFile: (file: File) => void;
    accept: string;
    children: ReactNode;
}

const FileUpload: FC<FileUploadProops> = ({ setFile, accept, children }) => {
    const ref = useRef<HTMLInputElement>(null)

    const onClick = () => {
        if (ref.current) {
          ref.current.click();
        } else {
          console.warn('inputRef is not available yet.');
        }
      };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
          } else {
            console.warn('error');
          }
    }

    return (
        <div onClick={onClick}>
            <input type="file" accept={accept} ref={ref} className={styles.none} onChange={onChange}/>
            { children }
        </div>
    )
}

export default FileUpload