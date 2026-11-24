import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffLayered: ForwardRefExoticComponent<ChatStackOffLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffLayered;
export { ChatStackOffLayered };
