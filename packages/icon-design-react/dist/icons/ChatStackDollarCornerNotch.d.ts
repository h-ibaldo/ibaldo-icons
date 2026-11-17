import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDollarCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDollarCornerNotch: ForwardRefExoticComponent<ChatStackDollarCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDollarCornerNotch;
export { ChatStackDollarCornerNotch };
