import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXCornerNotch: ForwardRefExoticComponent<ChatStackXCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXCornerNotch;
export { ChatStackXCornerNotch };
