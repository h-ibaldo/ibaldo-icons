import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckCornerFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckCornerFlat: ForwardRefExoticComponent<ChatStackCheckCornerFlatProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckCornerFlat;
export { ChatStackCheckCornerFlat };
