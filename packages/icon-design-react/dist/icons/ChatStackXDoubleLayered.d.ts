import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackXDoubleLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackXDoubleLayered: ForwardRefExoticComponent<ChatStackXDoubleLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackXDoubleLayered;
export { ChatStackXDoubleLayered };
