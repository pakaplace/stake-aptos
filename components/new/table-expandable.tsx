// @ts-nocheck
import { useMemo, useEffect, useState, useCallback } from 'react';
import { Table, TableColumnsType } from 'antd';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { BsTwitter, BsLink45Deg } from 'react-icons/bs';
import {
  Flex,
  Text,
  Textarea,
  Icon,
  Link,
  Button,
  useBreakpointValue,
  Divider as ChakraDivider,
  useClipboard,
  Stack,
} from '@chakra-ui/react';
import {
    BsInfoCircle
} from 'react-icons/bs';

import { Box, Tag, WrapItem } from '@chakra-ui/react';

function InterestTag({
  name, like, size = 'lg', ...props
}) {
  return (
    <WrapItem>
      <Tag
        size={size}
        variant="subtle"
        colorScheme={like ? 'green' : 'red'}
        rounded="lg"
        {...props}
      >
        {name}
      </Tag>
    </WrapItem>
  );
}

function TooltipIcon() {
  return (
    <BsInfoCircle
      style={{ marginLeft: 4 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    />
  );
}

const columns : TableColumnsType = [
  {
    title: '',
    width: 40,
    dataIndex: 'meta',
    key: 'meta',
    fixed: 'left',
    render: (x) => <Link href={x.website}><Text fontSize="md">{x.name}</Text></Link>,
  },
  {
    title: 
      <Flex flexWrap="wrap" align="center" justify="flex-end">
        <Text fontSize="xs">
          Description
        </Text>
      </Flex>,
    width: 120,
    dataIndex: 'description',
    key: 'description',
    align: 'right',
    render: (x) => <Text fontSize="xs">{x}</Text>,
  },
  {
    title: 
      <Flex flexWrap="wrap" align="center" justify="flex-end">
        <Text fontSize="xs">
          Socials
        </Text>
      </Flex>,
    width: 40,
    dataIndex: 'socials',
    key: 'socials',
    align: 'right',
    render: (x) => <Link href={x.twitter}><Icon as={BsTwitter} /></Link>
  },
  {
    title: 
      <Flex flexWrap="wrap" align="center" justify="flex-end">
        <Text fontSize="xs">
          Category
        </Text>
      </Flex>,
    width: 40,
    dataIndex: 'category',
    key: 'category',
    align: 'right',
    render: (x) => <Text fontSize="xs">{x[0]}</Text>,
  },
];

const data = [{
  meta: {name: "Petra Wallet", logo: "https://petra.app/", website: 'https://petra.app'},
  description: "Browser extension Aptos wallet for chromium browsers marketplace. Includes a testnet faucet.",
  socials: {twitter: 'https://twitter.com/petrawallet'},
  category: ['NFT'],
}]

export default function ScrollableTable(){
  const responsiveWidth = useBreakpointValue({ base: 500, md: 800, lg: 1000 });
  const [selectedWallet, setSelectedWallet] = useState<string>('');
  const [privateKey, setPrivateKey] = useState<string>('');
  const { hasCopied, onCopy } = useClipboard(privateKey)
  const [selectedKey, setKey] = useState<string>('');

  const expandedRowRender = (
    record,
  ) => (
    <Stack w='100%' spacing={4} px={4} direction='column'>
      <Text color='green.700' whiteSpace={'nowrap'} fontWeight={'semibold'} mr={2}>Long Description</Text>
      <Textarea placeholder='Longer description goes here...' onChange={(e)=> {
        console.log("Record", record._id, {notes: e.target.value})
        // updateUser(record._id, {notes: e.target.value})
      }}/>
    </Stack> 
  );

  return (
      <Table
        sticky
        tableLayout="fixed"
        columns={columns}
        dataSource={data}
        scroll={{ x: responsiveWidth || 800 }}
        pagination={false}
        expandable={{
          expandRowByClick: true,
          onExpand: (_, { key }: any) => {
            if (selectedKey === key) {
              setKey('');
            } else setKey(key);
          },
          expandIcon: ({ expanded, onExpand, record }) => (expanded ? (
            <MdExpandLess color="blue" onClick={(e) => onExpand(record, e)} />
          ) : (
            <MdExpandMore color='blue' onClick={(e) => onExpand(record, e)} />
          )),
          showExpandColumn: true,
          expandedRowRender,
          expandedRowKeys: [selectedKey],
        }}
      />
  );
}
