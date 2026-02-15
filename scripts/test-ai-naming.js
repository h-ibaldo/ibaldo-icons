/**
 * Test AI Naming System
 *
 * Run this to test the AI naming on sample icons before regenerating the full index
 */

import 'dotenv/config';
import { testAINaming } from './utils/ai-naming.js';

testAINaming().catch(console.error);
