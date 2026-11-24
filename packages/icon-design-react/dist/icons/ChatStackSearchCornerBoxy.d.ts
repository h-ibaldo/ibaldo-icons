import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCornerBoxy: ForwardRefExoticComponent<ChatStackSearchCornerBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCornerBoxy;
export { ChatStackSearchCornerBoxy };
