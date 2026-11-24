import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusCornerNotch: ForwardRefExoticComponent<ChatStackPlusCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusCornerNotch;
export { ChatStackPlusCornerNotch };
