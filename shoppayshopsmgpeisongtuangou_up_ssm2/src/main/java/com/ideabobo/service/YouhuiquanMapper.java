package com.ideabobo.service;

import com.ideabobo.model.Youhuiquan;

public interface YouhuiquanMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Youhuiquan record);

    int insertSelective(Youhuiquan record);

    Youhuiquan selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Youhuiquan record);

    int updateByPrimaryKey(Youhuiquan record);
}