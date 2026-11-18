import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagStringUpRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagStringUpRound: ForwardRefExoticComponent<TagStringUpRoundProps & RefAttributes<SVGSVGElement>>;

export default TagStringUpRound;
export { TagStringUpRound };
