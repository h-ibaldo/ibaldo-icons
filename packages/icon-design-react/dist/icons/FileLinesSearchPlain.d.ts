import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinesSearchPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinesSearchPlain: ForwardRefExoticComponent<FileLinesSearchPlainProps & RefAttributes<SVGSVGElement>>;

export default FileLinesSearchPlain;
export { FileLinesSearchPlain };
