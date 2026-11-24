import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileSettings: ForwardRefExoticComponent<FileSettingsProps & RefAttributes<SVGSVGElement>>;

export default FileSettings;
export { FileSettings };
