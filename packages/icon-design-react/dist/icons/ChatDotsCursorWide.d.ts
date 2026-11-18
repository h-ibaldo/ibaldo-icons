import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorWide: ForwardRefExoticComponent<ChatDotsCursorWideProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorWide;
export { ChatDotsCursorWide };
