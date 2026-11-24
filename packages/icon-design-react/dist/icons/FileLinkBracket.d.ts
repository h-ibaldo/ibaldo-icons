import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileLinkBracketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileLinkBracket: ForwardRefExoticComponent<FileLinkBracketProps & RefAttributes<SVGSVGElement>>;

export default FileLinkBracket;
export { FileLinkBracket };
