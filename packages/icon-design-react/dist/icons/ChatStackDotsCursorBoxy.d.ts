import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCursorBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCursorBoxy: ForwardRefExoticComponent<ChatStackDotsCursorBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCursorBoxy;
export { ChatStackDotsCursorBoxy };
