import React from 'react';

const Navbar = ({totalCount}) => {
    return (
        <>
        <section className="Navbar">
            <i className="fab fa-pagelines"></i>
            <span className="title">Habit Tracker</span>
            <span className="habit-count">{totalCount}</span>
        </section>
        </>
    );
};
            

export default Navbar;


// class Navbar extends PureComponent {
//     render() {
//         return (
//             <>
//             <section className="Navbar">
//             <i className="fab fa-pagelines"></i>
//             <span className="title">Habit Tracker</span>
//             <span className="habit-count">{this.props.totalCount}</span>
//         </section>
//             </>
//         );
//     }
// }

// export default Navbar;