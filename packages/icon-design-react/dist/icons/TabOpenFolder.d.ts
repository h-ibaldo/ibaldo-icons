import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabOpenFolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabOpenFolder: ForwardRefExoticComponent<TabOpenFolderProps & RefAttributes<SVGSVGElement>>;

export default TabOpenFolder;
export { TabOpenFolder };
