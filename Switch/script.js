/*
 * break keyword
 *  When JavaScript reaches a break keyword, it breaks out of the switch block.
 *  This will stop the execution inside the switch block.
 *  It is not necessary to break the last case in a switch block. The block breaks (ends) there   anyway.
 *  Note: If you omit the break statement, the next case will be executed even if the evaluation  does not match the case.
 */

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}

/*
 * Switch cases use strict comparison (===).
 * The values must be of the same type to match.
 * A strict comparison can only be true if the operands are of the same type.
 */
