import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCornerNotch: ForwardRefExoticComponent<ChatStackSearchCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCornerNotch;
export { ChatStackSearchCornerNotch };
