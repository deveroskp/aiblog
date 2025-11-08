import React from 'react';
import Box from '@mui/material/Box';
import { useRepoContext } from '../../contexts/Repocontext';
import RepoCard from './RepoCard';

const RepoPage: React.FC = () => {
    const { repos } = useRepoContext();
    return (
        <Box 
            sx={{ 
                width: '100%',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
            }}
        >
            {repos.map(repo => (
                <Box key={repo.id} sx={{ width: '100%', maxWidth: 1000 }}>
                    <RepoCard repo={repo} />
                </Box>
            ))}
        </Box>
    );
};

export default RepoPage;