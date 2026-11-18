import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextOffWide: ForwardRefExoticComponent<ChatTextOffWideProps & RefAttributes<SVGSVGElement>>;

export default ChatTextOffWide;
export { ChatTextOffWide };
