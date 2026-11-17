import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackThreeStaggeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackThreeStaggered: ForwardRefExoticComponent<ChatStackThreeStaggeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackThreeStaggered;
export { ChatStackThreeStaggered };
