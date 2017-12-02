import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from './../../components/Menu/'
import SocialsList from './../../components/SocialsList/'
import * as actions from './../../actions'
import { STATUS_LOADING, TYPE_INSTAGRAM } from './../../constants/common'
import css from './style.scss'

export class Home extends React.Component {
  state = {
    type: TYPE_INSTAGRAM,
    page: 1
  }

  componentWillMount() {
    const { actions } = this.props
    const { type } = this.state

    actions.getPostList(type)
  }

  onTypeChanged = (type) => {
    const { actions } = this.props

    this.setState((state) => {
      const nextPage = 1
      actions.setPostList([])
      actions.getPostList(type, nextPage)
      return {
        ...state,
        type,
        page: nextPage
      }
    })
  }

  onPageChanged = () => {
    const { type, page } = this.state
    const { actions } = this.props

    this.setState((state) => {
      const nextPage = page + 1
      actions.getPostList(type, nextPage)
      return {
        ...state,
        page: nextPage
      }
    })
  }

  render() {
    const { post } = this.props
    const { page, type } = this.state
    let anotherCount = post.data.totalCount - (page * 3)
    anotherCount = anotherCount > 3 ? 3 : anotherCount

    return (
      <div>
        <Menu
          activeType={type}
          onChange={this.onTypeChanged}
        />
        {post.meta.status === STATUS_LOADING
          ?
            <div>Loading...</div>
          :
            <div>
              <SocialsList data={post.data.list} />
              <div className={css.actionsToolbar}>
                {anotherCount > 0 &&
                  <button
                    onClick={this.onPageChanged}
                    className={css.actionsToolbar__loadBtn}
                  >
                    Display another {anotherCount}
                  </button>
                }
                <div className={css.actionsToolbar__loadedCount}>
                  Displayed accounts: {post.data.list.length} out of {post.data.totalCount}
                </div>
              </div>
            </div>
        }
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
