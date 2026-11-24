import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXCornerFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXCornerFlat: ForwardRefExoticComponent<ChatStackXCornerFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXCornerFlat;
export { ChatStackXCornerFlat };
