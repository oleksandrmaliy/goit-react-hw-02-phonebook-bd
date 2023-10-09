// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
// import FeedbackOptions from './FeedbackOptions'


function ContactsList ({contacts}){
    return (
         <ul>
            {contacts.map(contact => 
            <li key={nanoid(5)}>{contact}</li>
            )}
        </ul>
   )}
   
export default ContactsList;

// Feedback.propTypes = {
//      options: PropTypes.array.isRequired,
//      onLeaveFeedback: PropTypes.func.isRequired,
//      };