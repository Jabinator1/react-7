const HigherOrderComponent = WrappedComponent => {

    const location = {}
    const match = {}
    const history = {}

    return props => <WrappedComponent {...props} location={location} match={match} history={history} /* Add additional props here */ />
}

export default HigherOrderComponent
