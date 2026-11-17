import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXLayered: ForwardRefExoticComponent<ChatStackXLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXLayered;
export { ChatStackXLayered };
