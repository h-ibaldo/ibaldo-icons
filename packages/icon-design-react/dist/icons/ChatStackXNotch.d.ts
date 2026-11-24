import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXNotch: ForwardRefExoticComponent<ChatStackXNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXNotch;
export { ChatStackXNotch };
