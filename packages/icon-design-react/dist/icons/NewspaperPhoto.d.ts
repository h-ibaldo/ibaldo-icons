import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NewspaperPhotoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NewspaperPhoto: ForwardRefExoticComponent<NewspaperPhotoProps & RefAttributes<SVGSVGElement>>;

export default NewspaperPhoto;
export { NewspaperPhoto };
