import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckDoubleCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckDoubleCornerNotch: ForwardRefExoticComponent<ChatStackCheckDoubleCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckDoubleCornerNotch;
export { ChatStackCheckDoubleCornerNotch };
