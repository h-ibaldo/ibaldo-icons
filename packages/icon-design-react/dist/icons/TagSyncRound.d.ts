import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagSyncRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagSyncRound: ForwardRefExoticComponent<TagSyncRoundProps & RefAttributes<SVGSVGElement>>;

export default TagSyncRound;
export { TagSyncRound };
