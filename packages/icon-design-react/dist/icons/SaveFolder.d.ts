import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveFolderProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveFolder: ForwardRefExoticComponent<SaveFolderProps & RefAttributes<SVGSVGElement>>;

export default SaveFolder;
export { SaveFolder };
