// import PropTypes from 'prop-types';
// import FeedbackOptions from './FeedbackOptions'

function ContactsList ({contacts}){
    return (
        <div>
            <ul>
                {contacts.map( contact => 
                <li>{contact}</li>
                )}
            </ul>
        </div>
        
        
    )}

export default ContactsList;

// Feedback.propTypes = {
//      options: PropTypes.array.isRequired,
//      onLeaveFeedback: PropTypes.func.isRequired,
//      };