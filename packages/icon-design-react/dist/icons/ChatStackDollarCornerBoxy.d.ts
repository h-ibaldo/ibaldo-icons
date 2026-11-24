import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDollarCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDollarCornerBoxy: ForwardRefExoticComponent<ChatStackDollarCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDollarCornerBoxy;
export { ChatStackDollarCornerBoxy };
