import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckCornerNotch: ForwardRefExoticComponent<ChatStackCheckCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckCornerNotch;
export { ChatStackCheckCornerNotch };
