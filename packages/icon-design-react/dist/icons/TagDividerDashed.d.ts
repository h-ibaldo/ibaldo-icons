import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagDividerDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagDividerDashed: ForwardRefExoticComponent<TagDividerDashedProps & RefAttributes<SVGSVGElement>>;

export default TagDividerDashed;
export { TagDividerDashed };
