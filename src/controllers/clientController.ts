import { Request, Response, NextFunction } from "express";
// import Client from "../models/Client.model";

// GET ALL
export const getAllClients = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const clients = await Client.find();

    res.status(200).json({
      status: "success",
      results: clients.length,
      data: { clients },
    });
  } catch (error) {
    next(error);
  }
};

// GET ONE
export const getClient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const client = await Client.findById(req.params.id);

    if (!client) {
      return res.status(404).json({
        status: "fail",
        message: "Client not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { client },
    });
  } catch (error) {
    next(error);
  }
};

// CREATE
export const createClient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const newClient = await Client.create(req.body);

    res.status(201).json({
      status: "success",
      data: { client: newClient },
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE
export const updateClient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedClient) {
      return res.status(404).json({
        status: "fail",
        message: "Client not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { client: updatedClient },
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
export const deleteClient = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);

    if (!deletedClient) {
      return res.status(404).json({
        status: "fail",
        message: "Client not found",
      });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
