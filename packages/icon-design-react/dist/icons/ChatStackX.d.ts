import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackX: ForwardRefExoticComponent<ChatStackXProps & RefAttributes<SVGSVGElement>>;

export default ChatStackX;
export { ChatStackX };
