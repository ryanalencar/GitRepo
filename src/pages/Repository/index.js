import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSpinner2 } from 'react-icons/im';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Container from '../../components/Container';
import { Loading, Owner } from './styles';

class Repository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repository: {},
      issues: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    const { issues, loading, repository } = this.state;

    if (loading) {
      return (
        <Loading loading={loading}>
          <ImSpinner2 size={100} />
        </Loading>
      );
    }

    return (
      <Container>
        <Owner>
          <Link to="/">
            <FaArrowLeft />
            Voltar aos repositórios
          </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
