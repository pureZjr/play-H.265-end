import { conf } from 'qiniu';
export declare function qiniuConfig(): conf.ConfigOptions;
export declare function qiniuUpload({ file }: {
    file: any;
}): void;
